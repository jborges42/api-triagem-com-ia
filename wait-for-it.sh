#!/usr/bin/env bash
# Use this script to test if a given TCP host/port are available

TIMEOUT=15
QUIET=0
HOST=
PORT=
result=

echoerr() { if [[ $QUIET -ne 1 ]]; then echo "$@" 1>&2; fi }

while [[ $# -gt 0 ]]
do
  case "$1" in
    -q)
    QUIET=1
    shift 1
    ;;
    -t)
    TIMEOUT="$2"
    shift 2
    ;;
    --timeout=*)
    TIMEOUT="${1#*=}"
    shift 1
    ;;
    --)
    shift
    break
    ;;
    -*)
    echoerr "Unknown option: $1"
    exit 1
    ;;
    *)
    if [[ -z "$HOST" ]]; then
      HOST="$1"
    elif [[ -z "$PORT" ]]; then
      PORT="$1"
    else
      echoerr "Unknown argument: $1"
      exit 1
    fi
    shift 1
    ;;
  esac
done

if [[ -z "$HOST" || -z "$PORT" ]]; then
  echoerr "Usage: $0 host port [-t timeout]"
  exit 1
fi

wait_for() {
  for i in `seq $TIMEOUT` ; do
    nc -z "$HOST" "$PORT" > /dev/null 2>&1
    result=$?
    if [[ $result -eq 0 ]] ; then
      if [[ $QUIET -ne 1 ]] ; then
        echo "Host $HOST:$PORT is available after $i seconds."
      fi
      return 0
    fi
    sleep 1
  done
  if [[ $QUIET -ne 1 ]] ; then
    echo "Host $HOST:$PORT is still not available after $TIMEOUT seconds."
  fi
  return 1
}

wait_for
result=$?
exit $result
